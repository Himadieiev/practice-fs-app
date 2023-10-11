const { prisma } = require("./../prisma/prisma-client");

/**
 * @route GET /api/emloyees
 * @desc Get all employees
 * @access Private
 */

const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch {
    res.status(500).json({ message: "Failed to retrieve employees" });
  }
};

/**
 * @route GET /api/emloyees/:id
 * @desc Get employee by id
 * @access Private
 */

const employee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    res.status(200).json(employee);
  } catch {
    res.status(500).json({ message: "Failed to retrieve employee" });
  }
};

/**
 * @route POST /api/emloyees/add
 * @desc Add employee
 * @access Private
 */

const add = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      res.status(400).json({ message: "All fields are required" });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    res.status(201).json(employee);
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * @route POST /api/emloyees/remove/:id
 * @desc Delete employee
 * @access Private
 */

const remove = async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json("OK");
  } catch {
    res.status(500).json({ message: "Failed to delete the employee" });
  }
};

/**
 * @route PUT /api/emloyees/edit/:id
 * @desc Update employee
 * @access Private
 */

const edit = async (req, res) => {
  const data = req.body;
  const id = data.id;
  try {
    await prisma.employee.update({
      where: {
        id,
      },
      data,
    });

    res.status(204).json("OK");
  } catch {
    res.status(500).json({ message: "Failed to update the employee" });
  }
};

module.exports = {
  all,
  add,
  remove,
  employee,
  edit,
};
