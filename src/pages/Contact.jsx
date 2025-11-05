import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [form, setForm] = useState({ user_name: "", user_email: "", user_phone: "", user_message: "" });
    const [errors, setErrors] = useState({});
    const [sended,setSended] = useState(false)
    const formSend = useRef();

    const validate = () => {
        const newErrors = {};
        if (!form.user_name.trim()) newErrors.name = "Nombre es requerido";        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(form.user_email)) newErrors.email = "Correo valido es requerido";
        const phonePattern = /^[0-9]{7,15}$/;
        if (!phonePattern.test(form.user_phone)) newErrors.phone = "Teléfono es requerido (7–15 digitos)";
        if (form.user_message.trim().length < 5)
        newErrors.message = "Mensaje es requerido";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();        
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }
        setSended(true)
        setErrors({});
        emailjs
        .sendForm(
            'service_s2gwahd',
            'template_6oya10o',
            formSend.current, 
            { publicKey: 'xj9JDvEefzE5kHCgo',}
        )
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <section className="p-8 md:p-16 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-[#F49C9C]">Pedidos</h2>
            <p className="text-[#706a64]">A partir de 50 unidades</p>
            <p className="text-[#706a64]">Fechas de entrega a trata sobre pedidos</p>
            <p className="text-[#706a64] mb-6">Se requiere % pago inicial en base a la cantidad </p>
      
            <form ref={formSend} onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col gap-4">
                <input 
                type="text" 
                name="user_name" 
                placeholder="Nombre" 
                onChange={handleChange}
                className="p-2 border rounded-md text-[#706a64]" />
                {errors.name && <p className="text-red-500 text-sm m-0">{errors.name}</p>}

                <input 
                type="email" 
                name="user_email" 
                placeholder="Correo" 
                onChange={handleChange}
                className="p-2 border rounded-md text-[#706a64]" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                
                <input 
                type="number" 
                name="user_phone" 
                placeholder="Teléfono" 
                onChange={handleChange}
                className="p-2 border rounded-md text-[#706a64]" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                <textarea 
                placeholder="Mensaje" 
                name="user_message" 
                rows="4" 
                onChange={handleChange}
                className="p-2 border rounded-md text-[#706a64]"></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                {sended?
                <div className="text-[white] bg-[#F49C9C] h-[60px]">
                    <p className="text-lg pt-4 font-medium">Pedido enviado, pronto nos podremos en contacto!!!.</p>
                </div>
                :
                <button className="bg-[#b4825e] text-white py-2 rounded-md hover:bg-[#8e6449]">
                Enviar
                </button>
                }                
            </form>
        </section>
    );
}
