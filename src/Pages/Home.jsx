import { Link } from "react-router-dom"

export default function Home() {

    const myProjects = [
        {
            name: 'Hesap Makinesi',
            date: '05 Haziran 2024',
            img: './img/projects/calculator.png',
            desc: '4. işlem yapabileceğiniz hesap makinesi.',
            uses: [
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/calculator',
            demo_link: 'https://yasiralakus-calculator.netlify.app/'
        },
        {
            name: 'Portföy Sitesi - v2',
            date: '29 Mayıs 2024',
            img: './img/projects/portfolio-v2.png',
            desc: 'Portföy site tasarımı.',
            uses: [
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/portfolio-v2',
            demo_link: 'https://yasiralakus-portfolio-v2.netlify.app/'
        },
        {
            name: 'Spor Blog Projesi',
            date: '21 Mayıs 2024',
            img: './img/projects/newblog.png',
            desc: 'Spor kategorilerinin yer aldığı blog projesi tasarımı.',
            uses: [
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/newblog',
            demo_link: 'https://yasiralakus-newblog.netlify.app/'
        },
        {
            name: 'WhatsApp Web Klonu',
            date: '18 Mayıs 2024',
            img: './img/projects/whatsapp-clone.png',
            desc: 'WhatsApp web klon projesi. 800px üstü için kodlanmıştır. Mobilde görüntülenemez.',
            uses: [
                'React JS',
                'CSS',
            ],
            source_code: 'https://github.com/yasiralakus/whatsapp-clone',
            demo_link: 'https://wp-clone-project.netlify.app/'
        },
        {
            name: 'Fatura Takip Uygulaması',
            date: '17 Mayıs 2024',
            img: './img/projects/invoice-app.png',
            desc: 'Faturalarınızı girip ödeme takibi yapabileceğiniz bir site tasarımı.',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/invoice-app',
            demo_link: 'https://yasiralakus-invoiceapp.netlify.app/'
        },
        {
            name: 'PalettePro',
            date: '15 Mayıs 2024',
            img: './img/projects/palettepro.png',
            desc: 'Her kullanıcının kayıt olup renk paletleri oluşturup paylaşabileceği sosyal medya platformu.',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Supabase',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/palettepro',
            demo_link: 'https://yasiralakus-palettepro.netlify.app/'
        },
        {
            name: 'Kariyer Sitesi',
            date: '01 Mayıs 2024',
            img: './img/projects/career.png',
            desc: 'İş ilanlarının yer aldığı kariyer sitesi. İş ilanlarını filtreleyip inceleyebilirsiniz.',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/career',
            demo_link: 'https://yasiralakus-career.netlify.app/'
        },
        {
            name: 'Anka Blog',
            date: '28 Nisan 2024',
            img: './img/projects/ankablog.png',
            desc: 'Her kullanıcının kayıt olup istediği konuda yazılar paylaşabileceği çok kullanıcılı blog platformu.',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Supabase',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/anka-blog',
            demo_link: 'https://yasiralakus-ankablog.netlify.app/'
        },
        {
            name: 'Taş Kağıt Makas Oyunu',
            date: '03 Nisan 2024',
            img: './img/projects/rock-paper-scissors.png',
            desc: 'Herkesin bildiği taş kağıt makas oyunu..',
            uses: [
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/rock-paper-scissors',
            demo_link: 'https://yasiralakus-rockpaperscissors.netlify.app/'
        },
        {
            name: 'E-ticaret Site Tasarımı',
            date: '30 Mart 2024',
            img: './img/projects/ecommerce.png',
            desc: 'E-ticaret sitesi için proje klonu.',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/ecommerce',
            demo_link: 'https://yasiralakus-ecommerce.netlify.app/'
        },
        {
            name: 'Dijital Film Platformu Tasarımı',
            date: '24 Mart 2024',
            img: './img/projects/filmapp.png',
            desc: 'Dijital film platformu için responsive yapıda tasarım..',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/filmapp',
            demo_link: 'https://yasiralakus-filmapp.netlify.app/'
        },
        {
            name: 'Fotoğraf Sanatçısı Portföy Sitesi',
            date: '21 Mart 2024',
            img: './img/projects/photographer-portfolio.png',
            desc: 'Fotoğraf sanatçıları için şık portfolyo sitesi.',
            uses: [
                'React JS',
                'CSS',
                'Responsive',
                'Router'
            ],
            source_code: 'https://github.com/yasiralakus/photographer-portfolio',
            demo_link: 'https://yasiralakus-photographer-portfolio.netlify.app/'
        },

        {
            name: 'Restaurant Anasayfa Tasarımı',
            date: '18 Mart 2024',
            img: './img/projects/restaurant.png',
            desc: 'Lüks restaurant anasayfası için basit bir tasarım.',
            uses: [
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/restaurant',
            demo_link: 'https://yasiralakus-restaurant.netlify.app/'
        },

        {
            name: 'Vücut Kitle İndeksi Hesaplayıcı',
            date: '14 Mart 2024',
            img: './img/projects/bmi-calculator.png',
            desc: 'Boy ve kilo bilgilerinizi girerek Vücut Kitle İndeksinizi öğrenebileceğiniz uygulama.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/bmi-calculator',
            demo_link: 'https://yasiralakus-bmi-calculator.netlify.app/'
        },
        {
            name: 'Photosnap Uygulaması',
            date: '10 Mart 2024',
            img: './img/projects/photosnap.png',
            desc: 'Fotoğraflar ve hikayeler.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
            ],
            source_code: 'https://github.com/yasiralakus/photosnap',
            demo_link: 'https://jovial-sprinkles-9f223b.netlify.app/'
        },
        {
            name: 'E-ticaret Ürün Sayfası',
            date: '10 Mart 2024',
            img: './img/projects/e-commerce.png',
            desc: 'Basit bir e-ticaret ürün detay sayfası tasarımı.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/products',
            demo_link: 'https://e-commerce-yasiralakus.netlify.app/'
        },
        {
            name: 'Font Tester',
            date: '19 Ocak 2024',
            img: './img/projects/font-tester.png',
            desc: 'İstediğiniz bir metin ile font test edebileceğiniz basit bir uygulama.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/font-tester',
            demo_link: 'https://yasiralakus-fonttester.netlify.app/'
        },
        {
            name: 'Github Profile App',
            date: '17 Ocak 2024',
            img: './img/projects/github-profile.png',
            desc: 'Github kullanıcı adını girerek istediğiniz kişilerin Github profilindeki bazı detaylara ulaşabilirsiniz.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'API',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/github-profile-app',
            demo_link: 'https://yasiralakus-github-profile-app.netlify.app/'
        },
        {
            name: 'Bookmark Yöneticisi',
            date: '14 Ocak 2024',
            img: './img/projects/bookmark.png',
            desc: 'Eklentiler için kullanbileceğiniz basit bir arayüz klonu.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/bookmark',
            demo_link: 'https://yasiralakus-bookmark.netlify.app/'
        },
        {
            name: 'Age Calculator App',
            date: '07 Ocak 2024',
            img: './img/projects/age-calculator.png',
            desc: 'React JS ve CSS ile tasarlanmış basit bir yaş hesaplama uygulaması.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/age-calculator-app',
            demo_link: 'https://yasiralakus-age-calculator-app.netlify.app/'
        },

        {
            name: 'Frontend Quiz App',
            date: '07 Ocak 2024',
            img: './img/projects/frontend-quiz.png',
            desc: 'Frontend sorularının yer aldığı basit bir quiz uygulaması.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'Router',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/frontend-quiz-app',
            demo_link: 'https://yasiralakus-frontend-quiz-app.netlify.app/'
        },

        {
            name: 'Hava Durumu Uygulaması',
            date: '07 Ocak 2024',
            img: './img/projects/weather-app.png',
            desc: 'Arama butonuna girdiğiniz şehrin 1 haftalık hava durumuna ulaşabilirsiniz.',
            uses: [
                'Figma',
                'React JS',
                'CSS',
                'API',
                'Responsive'
            ],
            source_code: 'https://github.com/yasiralakus/WeatherApp',
            demo_link: 'https://weather-app-yasiralakus.netlify.app/'
        },
    ]

    const freelance = [
        {
            name: 'Aksa Oto Kurtarma',
            date: '17 Temmuz 2024',
            img: './img/freelance/aksaotokurtarma.png',
            desc: 'Araç transferi ve çekici hizmetleri veren şirket website projesi.',
            uses: [
                'React JS',
                'CSS',
                'Responsive'
            ],
            demo_link: 'https://aksaotokurtarma.com.tr/'
        },
    ]

    return (
        <div className="projects">

            <h1>Freelance Projeler</h1>


            {freelance.map(x => (
                <div className="project-item">
                    <img src={x.img} alt="" />
                    <div className="project-content">
                        <h3>{x.name}</h3>
                        <h6>{x.date}</h6>
                        <div className="uses">{x.uses.map(y => (
                                <h6>{y}</h6>
                            ))}</div>
                        <p>{x.desc}</p>
                        <div className="links">
                            <Link to={x.demo_link}>Projeyi Görüntüle</Link>
                        </div>
                    </div>
                </div>
            ))}

            <h1>Diğer Projeler</h1>

            {myProjects.map(x => (
                <div className="project-item">
                    <img src={x.img} alt="" />
                    <div className="project-content">
                        <h3>{x.name}</h3>
                        <h6>{x.date}</h6>
                        <div className="uses">{x.uses.map(y => (
                                <h6>{y}</h6>
                            ))}</div>
                        <p>{x.desc}</p>
                        <div className="links">
                            <Link to={x.demo_link}>Projeyi Görüntüle</Link>
                            <Link to={x.source_code}>Kodları Görüntüle</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}