package edu.ap.spring.infraction.jpa;

public class Infraction implements Comparable<Infraction> {
    public int id;

    public String datum_vaststelling_jaar;

    public String datum_vaststelling_maand;

    public String datum_vaststelling;

    public String opnameplaats_straat;

    public String opnameplaats_rijrichting_gaand;

    public String opnameplaats_zone_snelheid;

    public String aantal_passanten;

    public String aantal_overtredingen_snelheid;

    public String aantal_overtredingen_roodlicht;

    public int compareTo(Infraction ov){
        try{
            if (Integer.parseInt(this.aantal_overtredingen_snelheid) == Integer.parseInt(ov.aantal_overtredingen_snelheid))
            return 0;
            else if(Integer.parseInt(this.aantal_overtredingen_snelheid) > Integer.parseInt(ov.aantal_overtredingen_snelheid))
            return 1;
            else 
            return -1;
        }
        catch(Exception ex){
            return -1;
        }
    }
}
