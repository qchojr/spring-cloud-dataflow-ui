import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

/**
 * Confirm Service.
 *
 * @author Damien Vitrac
 */
@Injectable()
export class BlockerService {

  /**
   * Renderer
   */
  private renderer: Renderer2;

  /**
   * Constructor
   * @param rendererFactory
   */
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Lock
   */
  lock() {
    this.renderer.addClass(document.body, 'blocked');
  }

  /**
   * Unlock
   */
  unlock() {
    this.renderer.removeClass(document.body, 'blocked');
  }

}
