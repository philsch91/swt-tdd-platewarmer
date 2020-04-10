package at.schunker.swttddplatewarmer;

import java.util.Vector;

public class PlateWarmer {

    public enum State {ON, OFF}

    private int capacity;
    private State state;
    private Vector stack;

    public PlateWarmer(int capacity){
        if (capacity <= 0) {
            throw new IllegalArgumentException("Capacity must be greater than 0");
        }

        this.capacity = capacity;
        this.state = State.OFF;
        this.stack = new Vector(capacity);
    }

    public void turnOn() {
        this.state = State.ON;
    }

    public void turnOff() throws PlateWarmerException {
        if (!this.isEmpty()) {
            throw new PlateWarmerException("PlateWarmer is not empty");
        }
        this.state = State.OFF;
    }

    public State getState() {
        return this.state;
    }

    public int getPlateCount() {
        return this.stack.size();
    }

    public int getCapacity() {
        return this.capacity;
    }

    public String push(Object plate) throws PlateWarmerException {
        if (this.stack.size() == this.capacity) {
            //throw new PlateWarmerException("maximum capacity reached");
            throw new PlateWarmerException("PlateWarmer is full");
        }

        if (this.state == State.OFF) {
            throw new PlateWarmerException("PlateWarmer is turned off");
        }

        this.stack.add(plate);
        return "Addition successful";
    }

    public Object pop() throws PlateWarmerException {
        if (this.stack.size() == 0) {
            throw new PlateWarmerException("PlateWarmer is empty");
        }

        int i = this.stack.size() - 1;

        Object plate = this.stack.get(i);
        //Object plate = this.stack.lastElement();

        this.stack.remove(i);

        return plate;
    }

    public Object peek() throws PlateWarmerException {
        if (this.stack.size() == 0) {
            throw new PlateWarmerException("PlateWarmer is empty");
        }

        int i = this.stack.size() - 1;

        Object plate = this.stack.get(i);
        //Object plate = this.stack.lastElement();

        return plate;
    }

    public boolean isEmpty() {
        return this.stack.isEmpty();
    }

    public boolean isFull() {
        return this.stack.size() == this.capacity;
    }

    public boolean isFilled() {
        return this.stack.size() > 0;
    }

    public boolean isReadyForUse() {
        return this.state == State.ON && !this.isFull();
    }
}
