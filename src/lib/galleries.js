import { db } from './firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  query,
} from 'firebase/firestore'

// Récupérer toutes les galeries (admin)
export async function getAllGalleries() {
  const q = query(collection(db, 'galleries'), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// Récupérer une galerie par slug
export async function getGalleryBySlug(slug) {
  const snap = await getDocs(collection(db, 'galleries'))
  const found = snap.docs.find(d => d.data().slug === slug)
  if (!found) return null
  return { id: found.id, ...found.data() }
}

// Créer une galerie
// gallery = { clientName, slug, date, password, cloudinaryFolder, description }
export async function createGallery(gallery) {
  const docRef = await addDoc(collection(db, 'galleries'), {
    ...gallery,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

// Mettre à jour une galerie
export async function updateGallery(id, data) {
  await updateDoc(doc(db, 'galleries', id), data)
}

// Supprimer une galerie
export async function deleteGallery(id) {
  await deleteDoc(doc(db, 'galleries', id))
}

// Vérifier le mot de passe client (comparaison directe — pas de bcrypt côté client)
export function checkPassword(gallery, inputPassword) {
  return gallery.password === inputPassword
}
