import MultipleSelect from './ChildrenBarComponents/MultipleSelect'
import MenuList from './ChildrenBarComponents/MenuList'
import IconsList from './ChildrenBarComponents/IconsList';
import TogglerIcon from './ChildrenBarComponents/TogglerIcon';

export default function Bar() {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>

            {/* <MultipleSelect /> */}
            {/* <MenuList /> */}


            <IconsList /> 
            {/* <TogglerIcon />  */}

        </div>
    )
}