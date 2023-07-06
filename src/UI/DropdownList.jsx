import { Dropdown } from "@nextui-org/react";
import styles from "./DropdownList.module.scss";


const DropdownList = () => {
  return (

    <Dropdown>
      <Dropdown.Button flat>Ordenar por</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="data">Data de Publicação</Dropdown.Item>
        <Dropdown.Item key="categoria">Categoria</Dropdown.Item>
        <Dropdown.Item key="preco">Preço</Dropdown.Item>
        <Dropdown.Item key="todas" withDivider color="error">
          Todas
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownList;
