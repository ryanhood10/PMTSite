import React from "react";
import Equipo2 from '../../images/team2.png'

const NuestroEquipo = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="md:text-xl sm:text-lg font-bold py-2">
                    <h1 className="text-[#84BD00] text-4xl py-2 font-bold">Carreras en Construcción | Únete a Nuestro Equipo en PMT Site.</h1>
                    <p>
                        ¿Estás buscando una carrera gratificante en la industria de la construcción?
                        <br />
                        PMT Site ofrece emocionantes oportunidades para personas del centro de Tennessee que son apasionadas por la construcción y dedicadas a la excelencia.
                        <br />
                        <br />
                        ¡Únete a nosotros para construir un futuro más brillante en Nashville!
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row pt-8 pb-2 space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex justify-center">
                    <img src={Equipo2} alt="nuestro-equipo" className="h-64 rounded-3xl" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        ¿Por qué Elegir PMT Site?
                    </h2>
                    <p>
                        En PMT Site, valoramos a nuestros miembros del equipo y proporcionamos un entorno de apoyo para el crecimiento profesional. Aquí tienes algunas razones por las que deberías considerar unirte a nosotros:
                    </p>
                    <ul className="py-2 px-2 font-semibold text-lg list-disc list-inside pl-6 text-[#84BD00]">
                        <li><span className="font-bold">Gran Cultura Empresarial:</span> Disfruta de un entorno de trabajo positivo y colaborativo.</li>
                        <li><span className="font-bold">Salario Competitivo:</span> Ofrecemos salarios y beneficios competitivos.</li>
                        <li><span className="font-bold">Beneficios de Calidad:</span> Accede a beneficios de alta calidad para ti y tu familia.</li>
                        <li><span className="font-bold">Oportunidades de Crecimiento Interno:</span> Fomentamos el crecimiento y el avance dentro de la organización.</li>
                    </ul>
                    <p><a href='/JoinOurTeam' className="text-xl text-blue-400 font-bold hover:text-blue-600">"Need English? Click Here"</a></p>
                </div>
            </div>
            <p className="text-center font-bold pt-2">Contáctenos por correo electrónico a continuación.</p>
        </div>
    );
}

export default NuestroEquipo;
