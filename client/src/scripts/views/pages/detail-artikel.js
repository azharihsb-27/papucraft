import UrlParser from '../../routes/url-parser'
import { getDetailArtikel } from '../../utils/api'
const DetailArtikel = {
    async render(){
        return `
        <div class="content p-7 lg:p-14">
            <p class="text-xl lg:text-2xl font-medium text-primary">Detail Artikel</p>
            <article class="mx-auto mt-5 mb-2 flex flex-col w-[90%] h-full">
                <div class="flex flex-col gap-2 h-[20%]">
                    <img src="/img/bg.jpg"/ class="md:max-h-[10%] rounded-lg">
                    <div class="flex mt-2 gap-2 items-center">
                        <h3 class="font-bold">PapuCrafts</h3> - <p class="text-sm">23/12/2021</p>
                        <a class="ml-auto flex items-center gap-1 text-sm hover:text-blue-500 cursor-pointer" href="">
                            <span class="">source</span>
                            <span class="material-symbols-outlined">Public</span>
                        </a>
                    </div>
                </div>
                <h3 class="text-2xl my-2 font-bold">Warisan Budaya Tak Benda (WBTB) Tanah Papua</h3>
                <div id="body">

                </div>
            </article>
        </div>
        `
    },
    async afterRender(){
        const {id} = UrlParser.parseActiveUrlWithoutCombiner()
        const body = document.querySelector('div#body')
        const shadowBody = body.attachShadow({mode: 'open'})
        const data = `<h1>Warisan Budaya Tak Benda (WBTB) Tanah Papua</h1><p><br></p><p>Warisan budaya adalah keseluruhan peninggalan kebudayaan yang memiliki nilai penting sejarah, ilmu pengetahuan dan teknologi, dan/atau seni yang dimiliki bersama oleh suatu komunitas atau masyarakat dan mengalami perkembangan dari generasi ke generasi, dalam alur suatu tradisi.</span></p><p>Warisan budaya takbenda atau&nbsp;</span>intangible cultural heritage</em>&nbsp;bersifat tak dapat dipegang (</span>intangible</em>/ abstrak), seperti konsep dan teknologi; dan sifatnya dapat berlalu dan hilang dalam waktu seiring perkembangan zaman seperti misalnya bahasa, musik, tari, upacara, serta berbagai perilaku terstruktur lain.</span></p><p>UNESCO&nbsp;Convention For The Safeguarding Of The Intangible Cultural Heritage&nbsp;2003</em>: Warisan Budaya Takbenda adalah berbagai praktik, representasi, ekspresi, pengetahuan, keterampilan – serta instrumen, obyek, artefak dan ruang-ruang budaya terkait dengannya- bahwa masyarakat, kelompok dan, dalam beberapa kasus, perorangan merupakan bagian dari warisan budaya tersebut. Warisan budaya takbenda ini diwariskan dari generasi ke generasi, yang secara terus menerus diciptakan kembali oleh masyarakat dan kelompok dalam menanggapi lingkungan sekitarnya, interaksi mereka dengan alam dan sejarah mereka, dan memberikan rasa identitas yang berkelanjutan, untuk menghargai perbedaan budaya dan kreativitas manusia.</span></p><p>Balai Pelestarian Nilai Budaya Papua sampai saat ini telah melakukan kegiatan infentarisasi dengan jumlah 1 488 mata budaya di Papua dan Papua Barat. Dan memfasilitasi Pemerintah Provinsi melalui dinas terkait sejak tahun 2013 sampai 2019 mengajukan beberapa mata budaya dan ditetapkan sebagai warisan budaya tak benda Indonesia. Tercatat 38 mata budaya dari tanah Papua ( Papua dan Papua Barat) telah ditetapkan sebagai warisan budaya Indonesia.</span></p><h3>TERMASUK DALAM WARISAN BUDAYA TAKBENDA.</span></h3><p><br></p><p>Warisa Budaya Takbenda diwujudkan antara lain dibidang-bidang:</span></p><p><br></p><ol><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Tradisi dan Ekspresi Lisan, termasuk bahasa sebagai wahana warisan budaya takbenda.</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Seni pertunjukan</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Adat istiadat masyarakat adat, ritus, dan perayaan-perayaan;</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Pengetahuan dan kebiasaan perilaku mengenai alam semesta;</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Kemahiran tradisional.</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Tradisi dan Ekspresi Lisan misalnya bahasa, naskah ukno, permainan tradisional, pantun, cerita rakyat, mantra, doa, nyanyian rakyat dan lain-lain.</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Seni pertunjukan misalnya seni tari, seni suara, seni musik, seni teater, film dan lian-lain.</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Adat istiadat masyarakat adat, ritus, dan perayaan-perayaan misalya upacara tradisional (upacara daur hidup), system organisasi sosial, sister ekonomi tradisional dan lain-lain.</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Pengetahuan dan kebiasaan perilaku mengenai alam semesta misalnya pengetahuan tradisional, kearifan local, pengebatan tradisional dan lain-lain</span></li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>Kemahiran dan ketrampilan tradisional misalnya teknologi tradisional, arsitektur tradisional, pakaian tradisional, aksesoris tradisional, kerajinan tradisional, kuliner tradisional, media transportasi tradisional, senjata tradisional dan lai-lain.</span></li></ol><p><br></p>`
        shadowBody.innerHTML += data
    }
}
export default DetailArtikel