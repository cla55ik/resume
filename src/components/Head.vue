<template>
<div class="typewriter">
    <span>IVAN/CHELNOKOV/WEB/DEVELOPER</span>
</div>
<div class="head-img-text">
    <div class="line-orange orange-left">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
    <div class="img">
        <img src="@/assets/img/ivan-photo.jpg" alt="">
    </div>
    <div class="text">
        <h1>Иван<br> Челноков</h1>
        <p>33 года, родился 25 марта 1988</p>
    </div>
    <div class="line-orange orange-right">
        <hr size=5px width=80px align="left" color="#CE864B">
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style lang="scss">
@import "@/assets/variables.scss";
    div.typewriter{
        color: #fff;
        text-align: left;
        
    }


    .head-img-text{
        @extend %d-flex;
        margin-top: 25px;
        align-items: center;
    }

    .head-img-text .img img{
        background-color: #BEBDBB;
        border-radius: 250px;
        width: 120px;
        height: 120px;
        object-fit: contain;
    }

    .head-img-text .text h1{
        @extend %title-h1;

    }

    p{
        color:$sub-title-c;
        text-align: left;
        font-size: 12px !important;
    }

    .text{
        margin-left: 25px;
        align-items: flex-end;
        display:flex;
        flex-wrap: wrap;
        align-content: flex-end;
    }

    .img {
        display:flex;
        flex-wrap: wrap;
        align-content: flex-end;
    }

    .line-orange{
        display: none;
    }
        

    @media screen and (min-width:1200px) {
        .text p{
            width: 100%;
            margin-top: 20px;
            font-size: 20px !important;
        }

        .img img{
            width: 200px !important;
            height: 200px !important;
        }

        .text{
            margin-left:45px;
        }

        .head-img-text{
            
            margin-top: 90px;
        }

        .line-orange{
            display: block;
            
        }

        .orange-right{
            margin-left: 5%;
        }
        .orange-left{
            margin-right: 5%;
        }

    }


</style>