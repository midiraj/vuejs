Vue.component('btn', {
	template:
	`
	<a class="button is-dark" @click='launch'>Lunch Modal</a>

	`,
	methods:{
		launch(){
			this.$emit('button-is-clicked');
		}
	}
});

Vue.component('modal',{
	template:
	`
		<div class="modal" :class='jamal'>
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      	<slot></slot>
		      </p>
		      <button class="delete" aria-label="close" @click='closeModal'></button>
		    </header>
		    <section class="modal-card-body" >
		      <slot name='section'></slot>
		    </section>
		    <footer class="modal-card-foot">
		      <button class="button is-success">Save changes</button>
		      <button class="button" @click='closeModal'>Cancel</button>
		    </footer>
		  </div>
		</div>
	`,
	props:[
		'jamal',
	],
	methods:{
		closeModal(){
			this.$emit('close_modal');
		}
	}

});


new Vue({
	el: '#app',
	data:{
		activeModal:''
	},
	methods:{
		launchModal(){
			this.activeModal = 'is-active';
			// console.log('Deep');	
		},
		close(){
			this.activeModal = '';
		}
	}

});