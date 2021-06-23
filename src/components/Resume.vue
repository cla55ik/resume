<template>
    <div class="resume-wrapper">
        <div class="resume-col col-first">
            <div class="resume-item">
                <div class="item-title">
                    <h2> Жeлаемая должность </h2>
                </div>
                <div class="item-content">
                    <p class="post">Веб-разработчик</p>
                </div>
            </div>
            <div class="resume-item">
                <div class="item-title">
                    <h2> Опыт работы </h2>
                </div>
                <div class="item-content experience">
                    <p class="period">Январь 2017 - н.в.</p>
                    <p class="employer">Индивидуальный предприниматель</p>
                    <p class="description">Предоставление услуг в сфере IT.
Разработка, верстка, администрирование сайтов. Настройка и подключение хостинга. Настройка сетевого оборудования. Настройка и внедрение CRM-систем. Настройка и внедрение IP-телефонии.</p>
                </div>
                <div class="item-content experience">
                    <p class="period">Апрель 2014 — январь 2017</p>
                    <p class="employer">IT-инженер ООО «СПК Воронеж»</p>
                    <p class="description">Обеспечение функционирования IT- инфраструктуры компании. Внедрение систем автоматизации и оптимизации работы сотрудников. Настройка и администрирование CRM-систем, IP-телефонии, Систем видеонаблюдения, Серверов (Файловый, СУБД). Разработка и внедрение единой корпоративной сети для всех офисов компании. Разработка, верстка, администрирование сайтов компании.</p>
                </div>
                <div class="item-content experience">
                    <p class="period">Март 2008 — март 2014</p>
                    <p class="employer">инженер, старший инженер, начальник технического отдела ООО «ИПФ АртНет»</p>
                    <p class="description">Обеспечение бесперебойной работы действующей сети компании. Модернизация и оптимизация сети. Разработка архитектуры и запуск новых сегментов сети компании. Настройка оборудования WiFi, WiMAX, как на стороне клиента, так и на стороне базовой станции. Настройка и администрирование локальных сетей; настройка и администрирование виртуальных сетей (VLAN, VPN).</p>
                </div>    
            </div>
        </div>
        <div class="resume-col col-second">
            <div class="resume-item">
                <div class="item-title">
                    <h2>Контакты</h2>
                </div>
                <div class="item-content">
                    <div class="contacts">
                        <div class="contact" v-for="(contact, index) in contacts" :key="index">
                            <div class="img">
                                <img :src="require(`../assets/img/${contact.img}.svg`)" alt="">
                            </div>
                            <div class="text">
                                <a v-show="contact.link" v-bind:href="contact.link">{{ contact.text }}</a>
                                <span v-show="!contact.link" >{{ contact.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resume-item">
                <div class="item-title">
                    <h2>Ключевые навыки</h2>
                </div>
                <div class="item-content">
                    <div class="skills" >
                        <span v-for="(skill,index) in skills" :key="index">{{ skill }}</span>
                    </div>
                </div>
            </div>
            <div class="resume-item">
                <div class="item-title">
                    <h2>Личностные качества</h2>
                </div>
                <div class="item-content">
                    <p class="description">Обучаемость, быстрая адаптация к переменам; ориентированность на достижение цели; самостоятельность; стрессоустойчивость; целеустремленность; интерес к изучению тонкостей профессии; уравновешенность;</p>
                </div>
            </div>
            <div class="resume-item">
                <div class="item-title">
                    <h2>О себе</h2>
                </div>
                <div class="item-content">
                    <p class="description">Разрабатываю сайты c 2018 года. Люблю осваивать и применять новые технологи в разработке. Не привык останавливаться на достигнутом. Быстро учусь и стараюсь всегда развивать свои навыки.
На досуге люблю ходить в спортзал, кататься на велосипеде, путешествовать, проводить время в компании семьи и друзей 
за настольнымииграми.</p>
                </div>
            </div>
            <div class="resume-item">
                <div class="item-title">
                    <h2>Высшее образование</h2>
                </div>
                <div class="item-content">
                    <p class="period">2013</p>
                    <p class="employer">Всероссийский заочный финансово-экономический институт, Москва</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return{
                skills:[
                    'CSS', 'JavaScript', 'HTML', 'SQL', 'PHP', 'Vue.js','Bootstrap', 'Git',
                ],
                contacts:[
                    {img:'o-phone',text:'+7 910 281-47-60', link:'tel:+79102814760'},
                    {img:'o-mail',text:'ivan5420@yandex.ru', link:'mailto:ivan5420@yandex.ru'},
                    {img:'o-geo',text:'Воронеж', link:''}
                ],
            };
        },
        

    }
</script>

<style scoped lang="scss">
    @import "@/assets/variables.scss";

    .resume-wrapper{
        display: flex;
        flex-wrap: wrap;
        margin-bottom:90px;
    }

    .resume-col{
        width: 100%;
        text-align: left;
    }

    .item-title h2{
        @extend %resume-title;
        
    }

    .item-title{
        @extend %resume-title-before;
        display: flex;

    }

    .item-title:before{
        content: '<';
    }

    .item-title:after{
        content: '/>';
    }

    .post {
        @extend %sub-title-resume;
    }

    .period{
        @extend %resume-experience-period;
    }

    .employer{
        @extend %resume-experience-employer;
        @extend %margin-10-15;
    }

    .description{
        @extend %resume-experience-description;
    }

    .experience .description{
        @extend %margin-50-25;
    }

    .skills{
      
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .skills span {
          @extend %skills;
    }

    .skills span:hover {
          background-color: $orange;
    }

    .col-first{
        padding-right: 3%;
    }
    .col-second{
        padding-left: 3%;
    }


    .contact{
        display: flex;

    }

    

    .contact .text, .contact .text a{
        width: 90%;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        text-decoration: none;
        color: #E5E5E5;
    }


    .contact .text a:hover{
        color: $orange;

        
    }

    .contact{
        margin: 10px 0px;
    }

    .contacts{
        margin: -10px 0px;
    }

    .contact .img{
        width: 10%;
    }


    @media screen and (min-width:1200px) {

        .resume-col{
            width: 44%;
        }

        .resume-wrapper{
            margin-top:40px;
            margin-bottom:50px;
        }
    }

</style>