import express from 'express';

const router = express.Router();

// req - Lo que enviamos. res - Lo que express nos responde
router.get('/', (req, res) => {
  res.render('inicio');
});

router.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

export default router;
