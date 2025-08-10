const { v4: uuidv4 } = require('uuid');

const users = []; // Simulação de banco de dados em memória


//função para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const user = req.body;
    user.id = uuidv4();
    users.push(user);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


//função para obter todos os usuários
exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

//função para obter um usuário específico
exports.getUserById = (req, res)=>{
    const { id } = req.params;
    const user = users.find(u=> u.id === id);
    if(!user){
        return res.status(404).json({message: 'user not found'});
    }
    res.status(200).json(user);
}

//função para atualizar um usuário específico
exports.updater = (req,res)=>{
    const {id}= req.params;
    const {name, email} = req.body;
    const userIndex = users.findIndex(u => u.id === id);
    if(userIndex === -1){
        return res.status(404).json({message: 'User not found'});
    }
    users[userIndex] = {userIndex, name, email};
    res.status(200).json({message: 'User updated successfully', user: users[userIndex]});
}

//função para deletar um usuário específico
exports.deleteUser = (req, res) =>{
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    if(userIndex === -1){
        return res.status(404).json({message: 'User not found'});
    }
    users.splice(userIndex, 1);
    res.status(200).json({message: 'User deleted successfully'});

}