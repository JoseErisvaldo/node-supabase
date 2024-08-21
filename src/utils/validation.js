// Exemplo simples de validação para garantir que `name` e `email` sejam strings não vazias
const validateUser = (user) => {
  const { name, email } = user;
  if (typeof name !== 'string' || name.trim() === '') {
    return 'Name must be a non-empty string';
  }
  if (typeof email !== 'string' || email.trim() === '') {
    return 'Email must be a non-empty string';
  }
  return null;
};

module.exports = { validateUser };
