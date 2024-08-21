const express = require('express');
const { supabase } = require('../supabase/supabaseConnection');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;

    res.json({ users: data });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
