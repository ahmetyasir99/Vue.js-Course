<template>
    <div>
        <header v-if="$slots.header"> <!-- parent elementte header adlı slot çağırılmasa dahi
        burada header tagının altında oldugu için bu header tagı orada renderlanır ve slot da boş
        oldugu için boş bir header tagı olur, bunun önüne geçmek için header'a v-if koyduk yani
        için boşsa renderlanmaz -->
            <slot name="header">
                <!--<h2>The Default</h2>--><!-- burası header slotunun içi parent elementte boş olursa renderlanır -->
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots); //slotları yazdırır
        //console.log(this.$slots.header); 
    }
}
</script>
<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>