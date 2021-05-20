namespace $.$$ {
	
	export class $my_wiki extends $.$my_wiki {
		
		@ $mol_mem_key
		Note( id: string ) {
			return this.Store().sub( 'note=' + id, new $my_wiki_note )
		}
		
		note_id() {
			return this.$.$mol_state_arg.value( 'note' ) ?? ''
		}
		
		Note_current() {
			return this.Note( this.note_id() )
		}
		
		title( next?: string ) {
			return this.Note_current().title( next ) ?? super.title()
		}
		
		text( next?: string ) {
			return this.Note_current().text( next ) ?? ''
		}
		
		text_selection( next?: number[] ) {
			return this.Note_current().selection( 'text', next )
		}
		
	}
	
}
