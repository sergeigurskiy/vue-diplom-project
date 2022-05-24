<template>
    <footer class="block-footer">
        <Container>
            <div class="block-footer__body">
                <div class="block-footer__contacts">
                    <div class="block-footer__icon"><img src="../assets/img/footer/01.svg" alt=""><span>(0232) 50-38-23 </span></div>
                    <div class="block-footer__icon"><img src="../assets/img/footer/02.svg" alt=""><span>aleshkevich@gsu.by </span></div>
                </div>
                <div class="block-footer__place">Адрес: 246019, г. Гомель, ул. Советская, 102 (учебный корпус № 5, каб. 3-6, 3-9, 3-8)</div>
            </div>
        </Container>
    </footer>
</template>

<script>
import Container from '../components/Container.vue'

    export default {
        components:{
            Container
        }
    }
</script>

<style lang="scss" scoped>
    .block-footer{
        background-color: #D2D2D2;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        &__contacts{
            padding-right: 10px;
            @media(max-width:800px){
                margin-bottom: 10px;
            }
        }
        &__icon{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            &:not(:last-child){
                margin-bottom: 10px;
            }
            & img{
                margin-right: 15px;
                max-width: 100%;
                width: 20px;
                height: 20px;
            }
        }
        &__body{
            min-height: 65px;
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 7px 0;
        }
    }
</style>