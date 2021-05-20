namespace $.$$ {
	
	export class $my_wiki_note extends $mol_store<{
		title: string
		text: string
	}> {
		
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
