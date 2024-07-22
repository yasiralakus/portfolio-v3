import { Link } from "react-router-dom";

export default function About() {

    return (
        <div className="about">

            <h3>Hakkımda</h3>

            <div className="line"></div>

            <p>2001 yılında İstanbul'da doğdum. İlkokul, ortaokul ve liseyi İstanbul'da tamamladıktan sonra Adana Çukurova Üniversitesi İşletme Lisans Bölümünü kazandım ve başarıyla tamamladım. Üniversite 4. sınıfta yazılım alanına olan ilgim arttı ve bu alana yönelmeye karar verdim. İstanbul'a döndükten sonra Acunmedya Akademi ile tanıştım ve Genişletilmiş Yazılım Uzmanlığı Eğitimi almaya başladım. Bu eğitimi de başarıyla tamamladım.Başta yabancı dil ve farklı yazılım alanları olmak üzere her alanda kendimi geliştirme için çaba harcıyorum.</p>

            <h3>Eğitim</h3>

            <div className="line"></div>

            <p>Çukurova Üniversitesi - İşletme Yönetimi Lisans</p>
            <p>Nişantaşı Üniversitesi Acunmedya Akademi - Yazılım Uzmanlığı Eğitimi</p>

            <h3>Dil</h3>

            <div className="line"></div>

            <p>İngilizce B1</p>

            <h3>Yetenekler</h3>

            <div className="line"></div>

            <p>CSS - HTML - JavaScript - React Js - Bootstrap - GitHub - Figma - VS Code - Postman - Netlify - React Router - Supabase - Tailwind</p>

            <h3>Freelance</h3>

            <div className="line"></div>

            <p>Freelance çalışma için müsaitim. İletişim için <Link to={'/mailto:yasiralakus11@gmail.com'}>tıklayın</Link></p>


        </div>
    )
}