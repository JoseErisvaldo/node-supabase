const express = require('express');
const { supabase } = require('../supabase/supabaseConnection');
const router = express.Router();

// Rota para listar todos os usuários (GET)
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});

// Rota para criar um novo usuário (POST)
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const { data, error } = await supabase.from('users').insert([{ name, email }]);

    if (error) throw error;

    res.status(201).json({ message: 'User created successfully', user: data[0] });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});

module.exports = router;
  