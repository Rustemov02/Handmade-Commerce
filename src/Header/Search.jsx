import { Paper, InputBase, Divider } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <div className='none990' style={{ width: "fit-content", width: "30%" }}>
            <Paper
                component="form"
                sx={{ p: '8px 10px', display: 'flex', alignItems: 'center', maxWidth: 500, }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search For More Than 10,000 Products"
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default Search