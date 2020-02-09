namespace L_10 {
  export abstract class Moveable {
    protected position: Vector;
    protected velocity: Vector;

    protected constructor(_position?: Vector) { //nur in Bird und Birdfood
      if (_position)
        this.position = _position.copy();
      else
        this.position = new Vector();

      this.velocity = new Vector();
    
    }

    public move(_timeslice: number): void {

      let offset: Vector = this.velocity.copy();
      //offset.scale(_timeslice);
      this.position.add(offset);

      if (this.position.x < -50)
        this.position.x += crc2.canvas.width + 50;

      if (this.position.y < -50)
        this.position.y += crc2.canvas.height + 50;

      if (this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;

      if (this.position.y > crc2.canvas.height)
        this.position.y -= crc2.canvas.height;
    }

  }

}

