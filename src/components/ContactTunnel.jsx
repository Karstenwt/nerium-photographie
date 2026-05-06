'use client';

import { useState } from 'react';
import MagneticWord from '@/components/MagneticWord';

const STEPS = [
  {
    id: 'date',
    question: 'Quelle est la date de votre mariage ?',
    type: 'date',
    placeholder: 'JJ/MM/AAAA',
    icon: '◈',
  },
  {
    id: 'lieu',
    question: 'Où aura lieu votre mariage ?',
    type: 'text',
    placeholder: 'Ville, château, domaine...',
    icon: '◎',
  },
  {
    id: 'prenoms',
    question: 'Vos prénoms ?',
    type: 'text',
    placeholder: 'Marie & Antoine',
    icon: '◇',
  },
  {
    id: 'email',
    question: 'Votre adresse email ?',
    type: 'email',
    placeholder: 'votre@email.com',
    icon: '◉',
  },
  {
    id: 'message',
    question: 'Racontez-moi votre histoire',
    type: 'textarea',
    placeholder: 'Comment vous êtes-vous rencontrés ? Quelle ambiance imaginez-vous pour votre mariage ?',
    icon: '◈',
  },
];

export default function ContactTunnel() {
  const [step,    setStep]    = useState(0);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState('');
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState(false);
  const [sending, setSending] = useState(false);

  const currentStep = STEPS[step];
  const progress    = ((step) / STEPS.length) * 100;

  const handleNext = () => {
    if (!current.trim()) return;
    const newAnswers = { ...answers, [currentStep.id]: current };
    setAnswers(newAnswers);
    setCurrent('');

    if (step < STEPS.length - 1) {
      setStep(s => s + 1);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (data) => {
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const err = await res.json().catch(() => ({}));
        console.error('Contact API error:', err);
        setError(true);
      }
    } catch(e) {
      console.error('Contact fetch error:', e);
      setError(true);
    }
    setSending(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && currentStep.type !== 'textarea') handleNext();
  };

  if (sent) {
    return <TunnelSuccess answers={answers} />;
  }

  if (error) {
    return (
      <section className="nr-tunnel nr-tunnel--success">
        <div className="nr-tunnel__body">
          <div className="nr-tunnel__success-icon">✕</div>
          <h3 className="nr-tunnel__success-title">Une erreur est survenue</h3>
          <p className="nr-tunnel__success-text">
            Votre message n&apos;a pas pu être envoyé. Réessayez dans quelques instants
            ou contactez-moi directement à{' '}
            <a href="mailto:nerium.photographie@gmail.com">nerium.photographie@gmail.com</a>.
          </p>
          <button className="nr-tunnel__next" onClick={() => setError(false)}>
            Réessayer
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="nr-tunnel">
      <div className="nr-tunnel__progress">
        <div
          className="nr-tunnel__progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="nr-tunnel__body">
        <div className="nr-tunnel__step" key={step}>

          <p className="nr-tunnel__step-num">
            {step + 1} <span>/ {STEPS.length}</span>
          </p>

          <h3 className="nr-tunnel__question">
            {currentStep.icon} {currentStep.question}
          </h3>

          {currentStep.type === 'textarea' ? (
            <textarea
              className="nr-tunnel__input nr-tunnel__textarea"
              placeholder={currentStep.placeholder}
              value={current}
              onChange={e => setCurrent(e.target.value)}
              autoFocus
              rows={4}
            />
          ) : (
            <input
              className="nr-tunnel__input"
              type={currentStep.type}
              placeholder={currentStep.placeholder}
              value={current}
              onChange={e => setCurrent(e.target.value)}
              onKeyDown={handleKey}
              autoFocus
            />
          )}

          <button
            className="nr-tunnel__next"
            onClick={handleNext}
            disabled={!current.trim() || sending}
          >
            {step < STEPS.length - 1 ? (
              <>Continuer <span className="nr-tunnel__arrow">&rarr;</span></>
            ) : (
              sending ? 'Envoi...' : 'Envoyer ma demande \u2192'
            )}
          </button>

          {step > 0 && (
            <button
              className="nr-tunnel__back"
              onClick={() => { setStep(s => s - 1); setCurrent(answers[STEPS[step-1].id] || ''); }}
            >
              &larr; Retour
            </button>
          )}
        </div>
      </div>

      <p className="nr-tunnel__reassure">
        Réponse sous 48h &middot; Sans engagement &middot; Vos données restent privées
      </p>
    </section>
  );
}

function TunnelSuccess({ answers }) {
  return (
    <section className="nr-tunnel nr-tunnel--success">
      <div className="nr-tunnel__body">
        <div className="nr-tunnel__success-icon">◈</div>
        <h3 className="nr-tunnel__success-title">
          Merci {answers.prenoms?.split('&')[0]?.trim()}
        </h3>
        <p className="nr-tunnel__success-text">
          Votre message a bien été reçu. Je reviendrai vers vous très prochainement
          pour vous partager mes disponibilités pour votre <MagneticWord>mariage</MagneticWord>
          {answers.lieu ? ` à ${answers.lieu}` : ''}.
        </p>
        <div className="nr-tunnel__success-detail">
          <span>{answers.date}</span>
          <span>{answers.lieu}</span>
        </div>
        <p className="nr-tunnel__success-sub">
          Un email de confirmation a été envoyé à <strong>{answers.email}</strong>
        </p>
      </div>
    </section>
  );
}
