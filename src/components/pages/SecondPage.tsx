import CardCinema from '../components/CardCinema';
import './Verstka.scss';
const SecondPage = () => {
    return <div className='wrp'>
        <header className='header'>
            <nav className='header-menu'>
                <ol className='header-menu-list'>
                    <li className='header-menu-list-el'>Главная</li>
                    <li className='header-menu-list-el'>О Кино</li>
                    <li className='header-menu-list-el'>Кадры</li>
                    <li className='header-menu-list-el'>Персонажи</li>
                </ol>
                <div className='header-menu-wrp'>
                    <button className='header-menu-wrp-btn'>Поддержка</button>
                </div>
            </nav>
            <article className='header-first'>
                <figure className='header-first-wrp'>
                    <h1 className='header-first-wrp-title'>Star Warseclipse™</h1>
                    <p className='header-first-wrp-description'>Новый приключенческий экшен с несколькими действующими персонажами и разветвленным повествованием, события которого происходят в эпоху расцвета республики – от Quantic Dream и Lucasfilm Games. Находится сейчас на ранней стадии разработки.</p>
                    <div className='header-first-wrp-btn'>
                        <button className='header-first-wrp-btn-text'>Посмотреть трейлер</button>
                    </div>
                </figure>
            </article>
        </header>
        <main className='main'>
            <article className='main-cinema'>
                <h3 className='main-cinema-title'>Всё ещё не можете определиться с выбором кино?</h3>
                <div className='rod-glav'>
                    <div className='rod'>
                        <h3 className='main-cinema-picture'>Звёздные войны: Эпизод 1 – Скрытая угроза
                        </h3>
                        <CardCinema text='Звёздные войны: Эпизод 1 – Скрытая угроза' url='/pngs/cinema4.png'/>
                    </div>
                    <div className='rod2'>
                        <h3 className='main-cinema-picture'>Звёздные войны:
                            Эпизод 2 – Атака клонов</h3></div>
                            <CardCinema text='Звёздные войны: Эпизод 2 – Атака клонов' url='/pngs/cinema5.png'/>
                    <div className='rod3'>
                        <h3 className='main-cinema-picture'>Звёздные войны: Эпизод 3 – Месть ситхов</h3></div>
                        <CardCinema text='Звёздные войны: Эпизод 3 – Месть ситхов' url='/pngs/cinema3.png'/>
                    <div className='rod4'>
                        <h3 className='main-cinema-picture'>Звёздные войны: Эпизод 4 – Новая надежда</h3></div>
                        <CardCinema text='Звёздные войны: Эпизод 4 – Новая надежда' url='/pngs/cinema2.png'/>
                    <div className='rod5'>
                        <h3 className='main-cinema-picture'>Звёздные войны: Эпизод 5 – Империя наносит ответный...</h3></div>
                        <CardCinema text='Звёздные войны: Эпизод 5 – Империя наносит ответный...' url='/pngs/cinema1.png'/>
                </div>


            </article>
            <figure>
                <h2>У каждого выбора есть</h2>
                <h3>Любое принятое вами решение может иметь драматические последствия для вашего путешествия. Образ жизни на Внешнем кольце находится под угрозой, и вы должны выбрать свой путь.</h3>
            </figure>
            <figure>
                <h2>Кадры из кино</h2>
                <button><img alt="ttt" /></button>
                <button><img alt="tt1" /></button>
                <button><img alt="tt2" /></button>
                <button><img alt="tt3" /></button>
                <button><img alt="tt4" /></button>
                <button><img alt="tt5" /></button>
                <button><img alt="tt6" /></button>
                <button><img alt="tt7" /></button>
                <button><img alt="tt8" /></button>
                <button>Раскрыть ещё</button>
            </figure>
            <figure>
                <h1>Посмотреть Трейлер</h1>
                <video><button></button></video>
                <video><button></button></video>
                <video><button></button></video>
            </figure>
            <article>
                <h1>Звёздные Войны</h1>
                <h2>«Делай до конца. Или не делай совем. Нет такого слова „Пытаться“»</h2>
                <h5>Мастер Йода</h5>
            </article>
            <article>
                <h2>Персонажи</h2>
                <button><img alt="ttt" />
                    <h2>Дарт Вейдер</h2>
                    <h4>Центральный персонаж первых шести эпизодов саги «Звёздные войны». Также появляется в фильме «Изгой-один».</h4>
                </button>
                <button><img alt="ttt" />
                    <h2>Оби-Ван Кеноби</h2>
                    <h4>Персонаж медиафраншизы «Звёздные войны». Один из немногих главных героев саги, появлявшихся в той или иной форме в семи фильмах франшизы.</h4>
                </button>
                <button><img alt="ttt" />
                    <h2>Дарт Мол</h2>
                    <h4>Персонаж медиафраншизы «Звёздные войны», тёмный владыка ситхов, бывший ученик Дарта Сидиуса.</h4>
                </button>
                <button><img alt="ttt" />
                    <h2>Аока Танго</h2>
                    <h4>Бывший падаван Ордена джедаев. Придуман американским мультипликатором и сценаристом Дэйвом Филони.</h4>
                </button>
                <button><img alt="ttt" />
                    <h2>Йода</h2>
                    <h4>Вымышленный персонаж вселенной «Звёздные войны», гранд-мастер ордена джедаев.</h4>
                </button>
            </article>
            <article>
                <h1>Если остались вопросы по "Звездным войнам" мы на них ответим</h1>
                <h3>"Да прибудет с тобой Сила"</h3>
                <button>
                    <h3>Ваш вопрос</h3>
                </button>
                <button>Отправить</button>
            </article>

        </main>
        <footer>
            <figure>
                <a href="#">Discord</a>
                <a href="#">YouTube</a>
                <a href="#">Facebook</a>
                <a href="#">Telegram</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">Reddit</a>
                <a href="#">Gmail</a>
            </figure>
            <h3>STAR WARS ECLIPSE<span>tm</span></h3>
            <h5>STAR WARS © & ™ Lucasfilm Ltd. All Rights Reserved. © 2023 Quantic Dream.
                Quantic Dream and the Quantic Dream logo are trademarks of Quantic Dream. All Rights Reserved. All other marks belong to their respective owners.</h5>

        </footer>
    </div>
}
export default SecondPage;