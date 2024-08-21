const { supabase } = require('../supabase/supabaseConnection');

exports.createUser = async (req, res, next) => {
  const { name, email } = req.body;

  console.log('Request body:', req.body);

  if (!name || !email) {
    console.log('Validation failed: Missing name or email');
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const { data, error } = await supabase.from('users').insert([{ name, email }]);

    if (error) {
      console.error('Supabase error:', error.message);
      throw error;
    }

    console.log('User created successfully:', data);
    res.status(201).json({ message: 'User created successfully', user: data[0] });
  } catch (error) {
    console.error('Internal server error:', error.message);
    next(error); // Passa o erro para o middleware de tratamento de erros
  }
};
