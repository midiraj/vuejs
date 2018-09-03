Vue.component('btn', {
	template:
	`
	<a class="button is-dark" @click='launch'>Lunch Modal</a>

	`,
	methods:{
		launch(){
			this.$emit('buttonIsClicked');
		}
	}
});

Vue.component('modal',{
	template:
	`
		<div class="modal" :class='active'>
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      	<slot></slot>
		      </p>
		      <button class="delete" aria-label="close"></button>
		    </header>
		    <section class="modal-card-body" >
		      <slot name='section'></slot>
		    </section>
		    <footer class="modal-card-foot">
		      <button class="button is-success">Save changes</button>
		      <button class="button">Cancel</button>
		    </footer>
		  </div>
		</div>
	`,
	props:[
		'active',
	]

});


new Vue({
	el: '#app',
	data:{
		activeModal:''
	},
	methods:{
		launchModal(){
			this.activeModal = 'is-active';	
		}
	}

});