import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Tips1 from "../assets/img/tips1.jpg";

const TipsPage = () => {
    return (
        <section className='tips-page'>
            <section>
                <img src={Tips1} alt="tips1" className='tipsLamp w-100' />
            </section>
            <section className="d-flex align-items-center">
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <p className='mt-5'>AFTERSALES, TIPS <br /> 17-11-2023</p>
                            <h4 className='fw-bold'>Cara Mudah Cek Lampu Rem Mati atau Hidup,<br /> Segera Ganti Kalau Ternyata Tidak Berfungsi Lagi</h4>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <p>
                            Lampu rem punya peran sangat penting pada mobil yaitu sebagai alat komunikasi dengan pengendara lain.

                            <br />
                            Lampu rem memberikan sinyal berdasarkan pijakan pada pedal rem sehingga pengguna jalan lain tahu mobil kamu sedang mengurangi kecepatan.
                            <br />
                            Karena begitu penting, maka kondisi lampu rem wajib terjaga dengan baik supaya dapat bekerja normal.
                            <br />
                            Contoh kasus yang sering terjadi pada lampu rem adalah tidak berfungsi seperti seharusnya alias mati.
                            <br />
                            Ketika pedal rem diinjak, lampu tidak menyala, dan ini sangat bebahaya karena bisa ditabrak kendaraan lain dari belakang.
                        </p>
                        <p>
                            <span className='fw-bold'>Cara Mengecek Kondisi Lampu Rem</span>
                            <br />

                            Memang agak sulit memantau kondisi lampu rem karena posisinya di belakang mobil.
                            <br />

                            Namun, ada cara sederhana mengecek kondisi lampu rem yaitu saat mobil berhenti di dalam garasi.
                            <br />

                            Injak pedal rem dan perhatikan kondisi belakang via spion kiri dan kanan.
                            <br />

                            Kalau berfungsi, pasti ada refleksinya di tembok atau bodi mobil lain di sekitarnya.
                            <br />

                            Pastikan pula lampu rem ketiga yang berada di atap juga berfungsi normal.
                        </p>
                        <p className='text-center'>
                            <span className='fw-bold'>Cek Bohlam Lampu Rem</span>
                            <br />
                            Jika lampu rem tidak menyala, kamu bisa dicek apakah bohlamnya masih layak pakai atau tidak.
                            <br />

                            Kalau bohlamnya mati, maka sebaiknya segera ganti dengan yang baru.
                            <br />

                            Metode pengecekan serupa juga bisa dilakukan untuk memeriksa kondisi lampu senja dan lampu sein.
                        </p>
                        <p className='text-center'>
                            <span className='fw-bold'>Periksa Switch Lampu Rem</span>
                            <br />
                            Tetapi kalau sudah diganti tetap tidak menyala, sebaiknya kamu melakukan pemeriksaan ke komponen terkait lainnya.
                            <br />

                            Apabila lampu rem mobil kamu terus menyala meskipun tidak sedang menginjak pedal rem, maka yang harus dilakukan adalah mengecek switch lampu.
                            <br />

                            Pada umumnya letak switch ada di atas tuas pedal rem.
                            <br />

                            Switch rem inilah yang berfungsi memutus dan menyambungkan arus listrik dari baterai (aki) ke lampu rem.
                            <br />

                            Switch rem akan menyambungkan arus listrik ketika pedal rem diinjak, dan kembali memutus arus listrik ketika pedal rem dilepas.
                            <br />

                            Kalau benar sudah rusak maka bisa diganti dengan yang baru.
                            <br />

                            Buat kamu yang mengalami masalah pada lampu rem dan kesulitan memperbaiki sendiri, bisa datang langsung ke bengkel resmi Toyota.
                            <br />

                            Jangan tunda memperbaiki lampu rem karena sangat penting untuk keamanan berkendara.
                        </p>
                    </Row>
                </Container>
            </section>

        </section>
    )
}

export default TipsPage