<?php
class MinervaTemplateBeta extends MinervaTemplate {
	// FIXME: Remove variable when secondary page actions menu moves to stable
	protected $languageButtonClassName = 'mw-ui-button mw-ui-progressive button
		languageSelector border-box icon icon-32px';

	public function renderPageActions( $data ) {
		if ( !$this->isMainPage ) {
			parent::renderPageActions( $data );
		}
	}
}
