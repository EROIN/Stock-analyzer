import TextField from '@mui/material/TextField';
import {Autocomplete, InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBox.scss';

export const SearchBox = () => {
  return (
    <div>
      <SearchIcon className="search-icon" />
      <Autocomplete
        freeSolo
        disablePortal
        id="combo-box-demo"
        options={[{label: '1'}]}
        sx={{width: 300}}
        className="search-box-container"
        renderInput={params => (
          <TextField
            {...params}
            label="Movie"
            InputLabelProps={{
              shrink: false,
            }}
          />
        )}
      />
    </div>
  );
};
