const express = require('express');
const { supabase } = require('./supabase/supabaseConnection');
const usersRoute = require('./routes/users');

const app = express();

app.use('/users', usersRoute);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
