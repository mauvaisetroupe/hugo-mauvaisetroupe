//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.04.25 at 10:01:27 AM CEST 
//


package com.mauvaisetroupe.tdm.input;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the test package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _RootDicoSetDicoGeography_QNAME = new QName("", "geography");
    private final static QName _RootDicoSetDicoClimate_QNAME = new QName("", "climate");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: test
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link Root }
     * 
     */
    public Root createRoot() {
        return new Root();
    }

    /**
     * Create an instance of {@link Root.DicoSet }
     * 
     */
    public Root.DicoSet createRootDicoSet() {
        return new Root.DicoSet();
    }

    /**
     * Create an instance of {@link Root.Country }
     * 
     */
    public Root.Country createRootCountry() {
        return new Root.Country();
    }

    /**
     * Create an instance of {@link Root.Country.Page }
     * 
     */
    public Root.Country.Page createRootCountryPage() {
        return new Root.Country.Page();
    }

    /**
     * Create an instance of {@link Root.Xml }
     * 
     */
    public Root.Xml createRootXml() {
        return new Root.Xml();
    }

    /**
     * Create an instance of {@link Root.DicoSet.Dico }
     * 
     */
    public Root.DicoSet.Dico createRootDicoSetDico() {
        return new Root.DicoSet.Dico();
    }

    /**
     * Create an instance of {@link Root.Country.Content }
     * 
     */
    public Root.Country.Content createRootCountryContent() {
        return new Root.Country.Content();
    }

    /**
     * Create an instance of {@link Root.Country.Page.Picture }
     * 
     */
    public Root.Country.Page.Picture createRootCountryPagePicture() {
        return new Root.Country.Page.Picture();
    }

    /**
     * Create an instance of {@link Root.Country.Page.Content }
     * 
     */
    public Root.Country.Page.Content createRootCountryPageContent() {
        return new Root.Country.Page.Content();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "geography", scope = Root.DicoSet.Dico.class)
    public JAXBElement<String> createRootDicoSetDicoGeography(String value) {
        return new JAXBElement<String>(_RootDicoSetDicoGeography_QNAME, String.class, Root.DicoSet.Dico.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "", name = "climate", scope = Root.DicoSet.Dico.class)
    public JAXBElement<String> createRootDicoSetDicoClimate(String value) {
        return new JAXBElement<String>(_RootDicoSetDicoClimate_QNAME, String.class, Root.DicoSet.Dico.class, value);
    }

}
