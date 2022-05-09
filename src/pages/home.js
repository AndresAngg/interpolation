import React, { useState } from 'react';
import Box from '../components/Box'
import {
    TextField,
    Button,
    FormControl,
    Card,
    Typography,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Chip,
    Stack,
    Grid,
    Snackbar,
    Tab
} from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

const useStyles = makeStyles(() => ({
    inputs: {
        width: 130,
    }
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function createData(name, p1, p2, p3, p4, p5, p6) {
    return { name, p1, p2, p3, p4, p5, p6 };
}

const ej11 = [
    createData('Tiempo(horas)', 0, 1, 2, 3, 4, 5),
    createData('Temperatura °', 36.8, 37.2, 38.3, 37.9, 37.7, 37.5),
];
const ej12 = [
    createData('Año', 1962, 1970, 1980, 1987),
    createData('Miles de caloreías', 2.76, 2.87, 2.32, 3.49),
];
const Home = () => {
    const classes = useStyles();
    const [p1x, setP1x] = useState();
    const [p2x, setP2x] = useState();
    const [p1y, setP1y] = useState();
    const [p2y, setP2y] = useState();
    const [pointM, setPointM] = useState();
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [rs, setRs] = useState();
    const [ispresent, setIspresent] = useState(true);
    const [open, setOpen] = useState(false);
    const validateEmpty = p1x === undefined || p1y === undefined || p2x === undefined || p2y === undefined;
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const validateFormEmpty = () => {
        if (validateEmpty) {
            handleClick()
        }
    }
    const systemEqua = () => {
        if (validateEmpty) {
            return
        } else {
            if ((p1x * p2y) - (p1y * p2x) !== 0) {
                var valueA = ((p1y * 1) - (1 * p2y)) / ((p1x * 1) - (1 * p2x))
                var valueB = ((p1x * p2y) - (p1y * p2x)) / ((p1x * 1) - (1 * p2x))
                setA(valueA.toFixed(3))
                setB(valueB.toFixed(3))
            }
        }
    }
    const process = () => {
        setIspresent(false)
        const valueRs = parseInt((a * pointM)) + (-68.977)
        setRs(valueRs.toFixed(3))
    }
    return (
        <Box>
            <h2>Estudiantes: Andres Angulo, Jhon Barros</h2>
            <Card sx={{ minWidth: 275, marginTop: 10, marginBottom: 5 }}>
                <CardContent>

                    <Grid container>
                        <TabContext value={value}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Ejercicio 11" value="1" />
                                <Tab label="Ejercicio 12" value="2" />
                            </TabList>
                        </TabContext>
                        <Grid xs={12}>
                            {value === '1' &&
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    <b>11.</b> En un experimento para determinar la temperatura corporal,como resultado de la administración de un nuevo fármaco, se obtuvieron los siguientes valores, en función del tiempo transcurrido desde su toma:
                                </Typography>
                            }
                            {value === '2' &&
                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                    <b>12.</b> El número de calorías por español y día, en el período 1962-1987, siguió esta tendencia:
                                </Typography>
                            }
                            <TableContainer>
                                <Table sx={{ minWidth: 150, marginBottom: 5 }} aria-label="simple table">
                                    {value === '1' &&
                                        <TableBody>


                                            {ej11.map((row) => (
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell scope="row">
                                                        {row.name}
                                                    </TableCell>

                                                    <TableCell align="center" >{row.p1}</TableCell>
                                                    <TableCell align="center">{row.p2}</TableCell>
                                                    <TableCell align="center">{row.p3}</TableCell>
                                                    <TableCell align="center">{row.p4}</TableCell>
                                                    <TableCell align="center">{row.p5}</TableCell>
                                                    <TableCell align="center">{row.p6}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    }
                                    {value === '2' &&
                                        <TableBody>


                                            {ej12.map((row) => (
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell scope="row">
                                                        {row.name}
                                                    </TableCell>

                                                    <TableCell align="center" >{row.p1}</TableCell>
                                                    <TableCell align="center">{row.p2}</TableCell>
                                                    <TableCell align="center">{row.p3}</TableCell>
                                                    <TableCell align="center">{row.p4}</TableCell>
                                                    <TableCell align="center">{row.p5}</TableCell>
                                                    <TableCell align="center">{row.p6}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    }
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid xs={4}>

                            <Typography>Punto 1</Typography>
                            <FormControl>
                                <TextField id="X" className={classes.inputs} name="X1" onChange={(e) => {
                                    setP1x(e.target.value);
                                }} label="X" variant="outlined" />
                            </FormControl>
                            <FormControl>
                                <TextField id="Y" className={classes.inputs} name="Y1" onChange={(e) => {
                                    setP1y(e.target.value);
                                }} label="Y" variant="outlined" />
                            </FormControl>
                            <Typography>Punto 2</Typography>
                            <FormControl>
                                <TextField id="X" className={classes.inputs} name="X2" onChange={(e) => {
                                    setP2x(e.target.value);
                                }} label="X" variant="outlined" />
                            </FormControl>
                            <FormControl sx={{ marginBottom: 5 }}>
                                <TextField id="Y" className={classes.inputs} name="Y2" onChange={(e) => {
                                    setP2y(e.target.value)
                                }} label="Y" variant="outlined" />
                            </FormControl>

                            <Typography variant="h5" gutterBottom component="div">P(x) = ax+b</Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label={`P(${p1x === undefined ? 'X' : p1x}) = ${p1y === undefined ? 'Y' : p1y}`} color="primary" />
                                <Chip label={`P(${p2x === undefined ? 'X' : p2x}) = ${p2y === undefined ? 'Y' : p2y}`} color="success" />
                            </Stack>

                            <Typography variant="h6" sx={{ marginTop: 5 }} gutterBottom component="div">P({p1x === undefined ? 'X' : p1x}) = a({p1x === undefined ? 'X' : p1x})+b</Typography>
                            <Typography variant="h6" gutterBottom component="div">{p1x > 1 ? `${p1x}a + b` : `a + b`} = {p1y === undefined ? `P(X)` : p1y}</Typography>

                            <Typography variant="h6" sx={{ marginTop: 5 }} gutterBottom component="div">P({p2x === undefined ? 'X' : p2x}) = a({p2x === undefined ? 'X' : p2x})+b</Typography>
                            <Typography variant="h6" gutterBottom component="div">{p2x > 1 ? `${p2x}a + b` : `a + b`} = {p2y === undefined ? `P(X)` : p2y}</Typography>

                            <Stack direction="row" spacing={1}>
                                <Chip label={`a = ${a}`} color="primary" />
                                <Chip label={`b = ${b}`} color="success" />
                            </Stack>
                            <Button variant="outlined" sx={{ margin: 5 }} onClick={() => {
                                validateFormEmpty()
                                systemEqua()
                            }}>Calcular punto a y b</Button>
                            <FormControl>
                                <TextField id="pm" sx={{ marginTop: 5 }} className={classes.inputs} name="pm" onChange={(e) => {
                                    setPointM(e.target.value);
                                }} label="Punto Medio" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid xs={7} hidden={ispresent} sx={{ marginTop: 40 }}>
                            <Typography variant="h5">P({pointM}) = {a}({pointM}) + {b}</Typography>
                            <Typography variant="h5">P({pointM}) = {rs}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <Button variant="outlined" sx={{ margin: 5 }} onClick={() => {
                    process()
                }}>Calcular</Button>
            </Card>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        No olvides ingresar datos!
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
    );
}
export default Home