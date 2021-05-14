namespace $.$$ {
	
	export class $my_wiki extends $.$my_wiki {
		
		@ $mol_mem_key
		Note( id: string ) {
			return this.Store().sub( id, new $my_wiki_note )
		}
		
		Wiki() {
			return this.Note( 'wiki' )
		}
		
		title( next?: string ) {
			return this.Wiki().title( next ) ?? super.title()
		}
		
		text( next?: string ) {
			return this.Wiki().text( next ) ?? ''
		}
		
	}
	
}
