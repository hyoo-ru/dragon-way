namespace $.$$ {
	
	export class $my_wiki_note extends $mol_store<{
		details: string
		changed_moment: string
	}> {
		
		details( next?: string ) {
			
			if( next !== undefined ) {
				this.changed_moment( new $mol_time_moment )
			}
			
			return this.value( 'details', next ) ?? ''
		}
		
		details_selection( next?: number[] ) {
			return this.selection( 'details', next )
		}
		
		changed_moment( next?: $mol_time_moment ) {
			const str = this.value( 'changed_moment', next && next.toString() )
			return str ? new $mol_time_moment( str ) : null
		}
		
	}

}
