import Empregado from "../models/Empregado.js";

const empregados = [];

const router = express.Router();

router.get('/projeto'), async (req, res) => {
    const empregados = await Empregado.findAll();
    res.status(200).json(empregados);
}

router.get('/projeto:id'), (req, res) => {
    const { id } = req.params;
    const empregado = empregados.find((e) => e.id === id);

    if (!empregado) {
        return res.status(404).json({ error: 'Funcionário não encontrado'});
    }

    res.status(200).json(empregado);
}