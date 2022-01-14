namespace $.$$ {
	
	$mol_dom_context.localStorage?.clear()
	
	export class $my_wiki extends $.$my_wiki {
		
		@ $mol_mem_key
		note( id: string ) {
			const obj = new $my_wiki_note
			obj.state = $mol_const( this.state().doc( 'note' ).doc( id ) )
			return obj
		}
		
		note_id() {
			return this.$.$mol_state_arg.value( '' ) ?? ''
		}
		
		note_current() {
			return this.note( this.note_id() )
		}
		
		title() {
			return this.note_id().replace( /_/g, ' ' ) || super.title()
		}
		
		details( next?: string ) {
			return this.note_current().details( next )
		}
		
		details_selection( next?: number[] ) {
			return this.note_current().details_selection( next )
		}
		
		changed_moment( next?: $mol_time_moment ) {
			return this.note_current().changed_moment( next ) ?? new $mol_time_moment
		}
		
	}
	
}
