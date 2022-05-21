/* eslint-disable import/no-anonymous-default-export */
import styles from "../styles/App.css";
import Primeiro from "./teste/Primeiro";
import Fragmento from "./teste/Fragmento";
import Aleatorio from "./teste/Aleatorio";
import Card from "./layouts/Card";
import Familia from "./teste/Familia";
import FamiliaMembro from "./teste/FamiliaMembro";
import ListaAlunos from "./teste/ListaAlunos";
import TabelaProdutos from "./teste/TabelaProdutos";
import ParOuImpar from "./teste/ParOuImpar";
import UsuarioInfo from "./teste/UsuarioInfo";
import DiretaPai from "./teste/DiretaPai";
import IndiretaPai from "./teste/IndiretaPai";
import Input from "./teste/Input";
import Contador from "./contador/Contador";

export default () => (
    <div id="app" className={styles}>
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card tittle="#11 - counter" color="#424242">
                <Contador startingNumber={100} />
            </Card>
            <Card tittle="#10 - Component controller" color="#e45f56">
                <Input />
            </Card>
            <Card tittle="#09 - indirect communication" color="#8bad39">
                <IndiretaPai />
            </Card>
            <Card tittle="#08 - Direct communication" color="#59323c">
                <DiretaPai />
            </Card>
            <Card tittle="#07 - condition" color="#982395">
                <ParOuImpar number={21} />
                <UsuarioInfo user={{ name: "Luis" }} />
                <UsuarioInfo user={{}} />
            </Card>
            <Card tittle="#06 - iteration table" color="#Ff3000">
                <TabelaProdutos />
            </Card>
            <Card tittle="#05 - iteration" color="#FF4C65">
                <ListaAlunos />
            </Card>
            <Card tittle="#04 - Children component" color="#00c8f8">
                <Familia lastName="Silva">
                    <FamiliaMembro name="Luis" />
                    <FamiliaMembro name="Maria" />
                    <FamiliaMembro name="Mauricio" />
                </Familia>
            </Card>
            <Card tittle="#03 - Random challenge" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card tittle="#02 - Fragment" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card tittle="#01 - First Component" color="#E8B71A">
                <Primeiro tittle="Corno" subtittle="manso" great={1} />
            </Card>
        </div>
    </div>
);
