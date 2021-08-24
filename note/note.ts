namespace $.$$ {
	
	export class $my_wiki_note extends $mol_object2 {
		
		state() {
			return null as any as $mol_state_shared
		}
		
		details( next?: string ) {
			
			if( next !== undefined ) {
				this.changed_moment( new $mol_time_moment )
			}
			
			return this.state().sub( 'details' ).text( next )
		}
		
		details_selection( next?: number[] ) {
			return this.state().sub( 'details' ).selection( next )
		}
		
		changed_moment( next?: $mol_time_moment ) {
			const str = this.state().sub( 'changed_moment' ).value( next && next.toString() ) as string
			return str ? new $mol_time_moment( str ) : null
		}
		
	}

}
