const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    idade: {
        type: Number,
        required: [true, 'Idade é obrigatória'],
        min: [1, 'Idade deve ser maior que 0'], // Validação para garantir que a idade seja positiva
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: true, // Validação para garantir que o email seja único
        match: [/^\S+@\S+\.\S+$/, 'Por favor, insira um email válido'], // Validação de formato de email
    },
    telefone: {
        type: String,
        required: [true, 'Telefone é obrigatório'],
    },
    sexo: {
        type: String,
        required: [true, 'Sexo é obrigatório'],
        enum: ['Masculino', 'Feminino', 'Outro'], // Validação para garantir que sexo seja uma das opções
    },
    nivel: {
        type: Number,
        required: [true, 'Nível é obrigatório']
    },
    filial: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Filial', required: [true] // Adiciona a Referencia do Schema Filial ao Schema de Atleta
    },
    criadoEm: {
        type: Date,
        default: Date.now,
    },
    password: {  // Campo de senha
        type: String,
        required: true,
    },
    statusNivel: {
        type: String,
        enum: ['Aguardando Prova', 'Aprovado', 'Reprovado'], default: 'Aguardando Prova'
    },
    isProfessor: { 
        type: Boolean, default: false 
    },
    treinosPendentes: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Treinos' 
    }],
    treinosConcluidos: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Treinos' 
    }],
    rankingCorrespondente: { type: mongoose.Schema.Types.ObjectId, ref: 'Ranking' },
    rankingDuplaCorrespondente: { type: mongoose.Schema.Types.ObjectId, ref: 'Ranking' },
    desafiosConcluidos: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'desafio' }]
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;
