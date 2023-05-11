const express = require('express');
const uniqid = require('uniqid');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

router.post('/upload', async (req, res) => {
  
    // Génération du chemin du fichier temporaire avec un nom unique
    const photoPath = `./tmp/${uniqid()}.jpg`;

    // Déplacement du fichier reçu dans le dossier temporaire
  const resultMove = await req.files.photoFromFront.mv(photoPath);
  // Vérification du résultat du déplacement
  if (!resultMove) {
    // Téléchargement du fichier vers Cloudinary    res.json({ result: true });
    const resultCloudinary = await cloudinary.uploader.upload(photoPath);
    // Suppression du fichier temporaire
    
// Renvoi de la réponse avec l'URL de l'image sur Cloudinary
res.json({ result: true, url: resultCloudinary.secure_url });
} else {
        // Renvoi de la réponse avec une erreur en cas d'échec du déplacement
    res.json({ result: false, error: resultMove });
  }
  fs.unlinkSync(photoPath);
});

module.exports = router;
