package example;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;


/**
 * Created by estefania on 11/11/2017.
 */

@ApplicationPath("/")

public class peincipal extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        HashSet h = new HashSet<Class<?>>();
        h.add(ServicesM02.class);
        return h;
    }
}
