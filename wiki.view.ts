namespace $.$$ {
	
	export class $my_wiki extends $.$my_wiki {
		
		@ $mol_mem_key
		note( ref: $hyoo_crus_ref ) {
			return this.$.$hyoo_crus_glob.Node( ref, $my_wiki_note )
		}
		
		note_current() {
			const str = this.$.$mol_state_arg.value( '' )
			if( !str ) return null!
			const ref = $hyoo_crus_ref( str )
			return this.note( ref )
		}
		
		note_title( next?: string ) {
			return this.note_current()?.title( next ) ?? ''
		}
		
		note_body() {
			return this.note_current()?.Body( null )!
		}
		
		note_changed_moment() {
			return this.note_current()?.last_change() ?? null!
		}
		
		@ $mol_action
		add() {
			
			const land = this.$.$hyoo_crus_glob.land_grab( { '': $hyoo_crus_rank.mod } )
			
			this.$.$mol_dom_context.location.href = '#!=' + land.ref().description
			this.editing( true )
			
		}
		
		@ $mol_mem
		profile_arg() {
			return {
				'': this.$.$hyoo_crus_glob.home().hall_by( $my_wiki_note, { '': $hyoo_crus_rank.get } )!.ref().description
			}
		}
		
		@ $mol_mem
		editing( next?: boolean ) {
			return this.$.$mol_state_history.value( 'edit', next ) ?? false
		}
		
	}
	
}
