namespace $.$$ {
	
	export type $my_wiki_note_data = { title: string, text: string }
	
	export class $my_wiki_note extends $mol_store< $my_wiki_note_data > {
		
		title( next?: string ) {
			return this.value( 'title', next )
				?? this.text()?.replace( /\n[\s\S]*/, '' )
				?? null
		}
		
		text( next?: string ) {
			return this.value( 'text', next )
		}
		
	}

}
