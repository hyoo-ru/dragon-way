namespace $.$$ {
	
	$mol_dom_context.localStorage.clear()
	
	export class $my_wiki extends $.$my_wiki {
		
		@ $mol_mem_key
		Note( id: string ) {
			return this.Store().sub( 'note=' + id, super.Note( id ) )
		}
		
		note_id() {
			return this.$.$mol_state_arg.value( '' ) ?? ''
		}
		
		Note_current() {
			return this.Note( this.note_id() )
		}
		
		title() {
			return this.note_id().replace( /_/g, ' ' ) || super.title()
		}
		
		details( next?: string ) {
			return this.Note_current().details( next )
		}
		
		details_selection( next?: number[] ) {
			return this.Note_current().details_selection( next )
		}
		
		changed_moment( next?: $mol_time_moment ) {
			return this.Note_current().changed_moment( next ) ?? new $mol_time_moment
		}
		
	}
	
}
