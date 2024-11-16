import { useState } from "react"
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { Divider } from "@mui/material";

const metroStations = [
    "İçərişəhər",
    "Sahil",
    "28 May",
    "Gənclik",
    "Nəriman Nərimanov",
    "Ulduz",
    "Koroğlu",
    "Qara Qarayev",
    "Neftçilər",
    "Xalqlar Dostluğu",
    "Əhmədli",
    "Həzi Aslanov",
    "Bakmil",
    "Azadlıq Prospekti",
    "Dərnəgül",
    "Memar Əcəmi",
    "Nəsimi",
    "Avtovağzal",
    "Elmlər Akademiyası",
    "Nizami",
    "Xətai",
    "Cəfər Cabbarlı",
    "28 May",
    "Əcəmi",
    "Bakıxanov",
    "Xocəsən",
];
function PersonalInformation() {
    const [selectedOption, setSelectedOption] = useState('phone');
    const [selectedAreaOption, setSelectedAreaOption] = useState('zagatala')
    const handleChange = e => { 
        setSelectedOption(e.target.value)
    }

    const handleAreaChange = e => {
        setSelectedAreaOption(e.target.value)
    }


    const [metroName, setMetroName] = useState([]);

    const handleMetroChange = (event) => {
        setMetroName(event.target.value);
    };

    return (
        <div className="w-11/12 m-auto rounded-xl bg-[#FFF6E3] my-8">
            <div className='text-4xl lg:text-5xl text-[#DEAD6F] mt-10 p-5 text-center flex justify-start'>
                <p>Müştəri məlumatları</p>
            </div>


            <div className="flex flex-col justify-start w-4/5 m-auto   ">

                {/* YOUR NAME */}
                <div className="w-full lg:w-1/2  py-3">
                    <label hmtlFor="first-name" className="text-sm font-medium text-xl text-[#DEAD6F]">Adınız</label>
                    <div className="mt-2">
                        <input style={{ fontSize: '20px'}} type="text" autoComplete="given-name" className="size-2xl block w-full lg:w-3/5 rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <Divider className="h-[28px] w-full lg:w-[60%]" orientation="horizontal" />

                {/* CONNECTION TYPES */}

                <div className="w-full lg:w-1/2 py-3">
                    <label htmlFor="connection" className="text-[#DEAD6F] my-1 font-medium text-xl">Sizinlə necə əlaqə saxlayaq ?</label>
                    <div class="mt-2">
                        <select onChange={handleChange} id="connection" name="country" autoComplete="country-name" style={{ fontSize: '20px' }} className="*:text-xl w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value='phone'>Telefon nömrəsi</option>
                            <option value='email'>Mail ünvanı</option>
                            <option value='insta'>İnstagram</option>
                        </select>
                    </div>

                    <div className="py-2">
                    
                        {selectedOption === 'phone' && (
                            <input
                                required
                                type="number"
                                className="mt-4 text-xl w-full lg:w-3/5 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                placeholder="Telefon nömrənizi qeyd edin"
                            />
                        )}

                        {selectedOption === 'email' && (
                            <input
                                required
                                type="email"
                                className="mt-4 text-xl w-full lg:w-3/5 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                placeholder="Mail ünvanınızı qeyd edin"
                            />
                        )}

                        {selectedOption === 'insta' && (
                            <input
                                required
                                type="text"
                                className="mt-4 text-xl w-full lg:w-3/5 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                placeholder="İnstagram hesabınızı qeyd edin"
                            />
                        )}
                    </div>
                </div>

                <Divider className="h-[28px] w-full lg:w-[60%]" orientation="horizontal" />

                {/* LOCATION */}

                <div className="w-full lg:w-1/2 py-3">
                    <label htmlFor="location" className="text-sm font-medium text-xl text-[#dead6f]">Məhsulun çatdırılacağı ünvan</label>
                    <div class="mt-2">
                        <select onChange={handleAreaChange} id="location" name="country" autoComplete="country-name" style={{ fontSize: '20px' }} className="*:text-xl w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value='zagatala'>Zaqatala rayonu</option>
                            <option value='baku'>Bakı şəhəri</option>
                            <option value='other'>Digər</option>
                        </select>
                    </div>

                    <div>
                        {selectedAreaOption === 'zagatala' && (
                            <input
                                required
                                type="text"
                                className="mt-4 text-xl w-full lg:w-3/5 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                placeholder="Kənd,qəsəbə,küçə və s. adı daxil edin..."
                            />
                        )}

                        {selectedAreaOption === 'baku' && (
                            <div>
                                <FormControl sx={{my : 2}} className="w-full lg: w-3/5 font-chilanka">
                                    <InputLabel>Metrostansiya seçin</InputLabel>

                                    <Select
                                        value={metroName}
                                        onChange={handleMetroChange}
                                        input={<OutlinedInput label="Metrostansiya seçin" />}
                                    >
                                        {metroStations.map((name) => (
                                            <MenuItem key={name} value={name} sx={{ fontFamily: 'Chilanka' }}>
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        )}

                        {selectedAreaOption === 'other' && (
                            <input
                                required
                                type="text"
                                className="mt-4 text-xl w-full lg:w-3/5 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                placeholder="Ünvanı qeyd edin..."
                            />
                        )}
                    </div>

                </div>

                <Divider className="h-[28px] w-full lg:w-[60%]" orientation="horizontal" />

                {/* SAY SOMETHING */}

                <div className="w-full lg:w-3/5 py-2 mb-5">
                    <label htmlFor="about" className="text-sm font-medium text-xl text-[#dead6f]">Əlavəniz</label>
                    <div className="mt-2">
                        <textarea style={{fontSize : '25px'}} id="about" placeholder="Bir şeylər yazın..." name="about" rows="3" className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
            </div>
 
        </div>
    )
}


export default PersonalInformation