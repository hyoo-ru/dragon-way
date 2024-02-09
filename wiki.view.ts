namespace $.$$ {
	
	export class $my_wiki extends $.$my_wiki {
		
		@ $mol_mem_key
		note( ref: $hyoo_crus_ref ) {
			return this.realm().Node( ref, $my_wiki_note )
		}
		
		note_current() {
			const str = this.$.$mol_state_arg.value( '' )
			if( !str ) return null!
			const ref = $hyoo_crus_ref( str )
			return this.note( ref )
		}
		
		note_title( next?: string ) {
			return this.note_current().title( next ) ?? ''
		}
		
		note_body( next?: string ) {
			return this.note_current().body( next ) ?? ''
		}
		
		note_body_selection( next?: readonly[ begin: number, end: number ] ) {
			return this.note_current().body_selection( next )
		}
		
		note_changed_moment() {
			return this.note_current().last_change()!
		}
		
		@ $mol_action
		add() {
			
			const land = this.realm().home().Land_new( 0 )
			
			this.$.$mol_dom_context.location.href = '#!=' + land.ref().description
			this.editing( true )
			
		}
		
		@ $mol_mem
		profile_arg() {
			return {
				'': this.realm().home().Profile( '$my_wiki', $my_wiki_note, null )!.ref().description
			}
		}
		
		@ $mol_mem
		editing( next?: boolean ) {
			return this.$.$mol_state_history.value( 'edit', next ) ?? false
		}
		
		edit_close() {
			this.editing( false )
		}
		
		@ $mol_mem
		pages() {
			return [
				this.View_page(),
				... this.editing() ? [ this.Edit_page() ] : [],
			]
		}
		
	}
	
}
