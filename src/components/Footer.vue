<template>
    <div class="footer-wrapper">
        <div class="developer">
            <img src="@/assets/img/logo-e5.svg" alt="" >
           
        </div>
        <div class="contacts">
            © Ivan Chelnokov {{ year }}
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            year:0,
        }
    },
    mounted:function(){
        var date = new Date();
        this.year = date.getFullYear();
    }
}
</script>

<style scoped>
    .footer-wrapper{
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;

        color: #E5E5E5;
    }

   

    .developer {
        text-align: left;
        width: 20%;
    }

    .contacts{
        width: 80%;
        text-align: right;
    }

    
</style>