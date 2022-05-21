/* eslint-disable import/no-anonymous-default-export */
import styles from "./App.css";
import Primeiro from "./teste/js/Primeiro";
import Fragmento from "./teste/js/Fragmento";
import Aleatorio from "./teste/js/Aleatorio";
import Card from "./layouts/Card";
import Familia from "./teste/js/Familia";
import FamiliaMembro from "./teste/js/FamiliaMembro";
import ListaAlunos from "./teste/js/ListaAlunos";
import TabelaProdutos from "./teste/js/TabelaProdutos";
import ParOuImpar from "./teste/js/ParOuImpar";
import UsuarioInfo from "./teste/js/UsuarioInfo";
import DiretaPai from "./teste/js/DiretaPai";
import IndiretaPai from "./teste/js/IndiretaPai";
import Input from "./teste/js/Input";
import Contador from "./contador/js/Contador";

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
