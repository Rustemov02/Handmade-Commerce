import PaymentIcon from '@mui/icons-material/Payment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Services() {
    const iconStyle = {
        border: 'solid gray 1px',
        borderRadius: "100%",
        width: '70px',
        height: "70px",
        padding: '10px',
        margin : '10px 0',
        fontSize: "30px",
        color: '#DEAD6F'
    }

    const data = [
        {
            icon: <SupportAgentIcon style={iconStyle} />,
            title: '24/7 Müştəri Dəstəyi ',
            explain: "Sual və problemləriniz üçün əlaqə saxlaya biləcəyiniz müştəri xidmətləri"
        },
        {
            icon: <AssuredWorkloadIcon style={iconStyle} />,
            title: 'Məlumat Təhlükəsizliyi ',
            explain: "Müştəri məlumatlarının təhlükəsizliyi üçün şifrələmə texnologiyalarından istifadə olunur"
        },
        {
            icon: <WorkspacePremiumIcon style={iconStyle} />,
            title: 'Keyfiyyət Standartları ',
            explain: "Məhsulların keyfiyyəti və güvənliliyi müştərilərə təmin edilir"
        },
        {
            icon: <PaymentIcon style={iconStyle} />,
            title: 'Təhlükəsiz ödəniş ',
            explain: "Maliyyə əməliyyatlarında təhlükəsizlik və etibarlılığı tam təmin edilir"
        }

    ]


return (
    <div className=' h-120 w-full m-auto flex flex-row aling-center justify-evenly flex-wrap'>
        {data.map((item,index) => (
            <div key={index} className='w-1/5 min-w-48 my-3 flex flex-col items-start'>
                {item.icon}
                <h3 className='text-2xl font-chilanka my-2'>{item.title}</h3>
                <p>{item.explain}</p>
            </div>
        ))}
    </div>
)

}


export default Services